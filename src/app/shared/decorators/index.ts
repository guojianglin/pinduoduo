export function Emoji() {
  return (target: object, key: string) => {
    let val = target[key];
    const getter = () => {
        return val;
    };
    const setter = (value: string) => {
        val = `😍 ${value} 😘 `;
    };
    Object.defineProperty(target, key, {
        set: setter,
        get: getter,
        enumerable: true,
        configurable: true
    });
  };
}
export function Confirmable(message: string) {
  return (target: object, key: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;
    descriptor.value = function(...args: any) {
      const allow = window.confirm(message);
      if (allow) {
        original.apply(this, args);
      }
    };
  };
}
