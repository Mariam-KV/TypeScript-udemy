export default function autobind(
  _: any,
  _1: string,
  descriptor: PropertyDescriptor
) {
  let originalMethod = descriptor.value;
  let adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      let boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
