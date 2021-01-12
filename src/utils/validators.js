export const positiveNumber = (optional = true) => {
  return (props, propName, componentName) => {
    const prop = props[propName];
    if (optional && prop === undefined) return;
    if (typeof prop !== 'number' || prop <= 0)
      return new Error(
        `Invalid prop \`${propName}\` of type \`${typeof prop}\` supplied to \`${componentName}\`, expected \`number\`.`
      );
  };
};

export const numberBetween = (min, max, optional = true) => {
  return (props, propName, componentName) => {
    const prop = props[propName];
    if (optional && prop === undefined) return;
    if (typeof prop !== 'number' || min < prop < max)
      return new Error(
        `Invalid prop \`${propName}\` of type \`${typeof prop}\` supplied to \`${componentName}\`, expected ${min} < \`number\` < ${max}.`
      );
  };
};

export const FallbackProps = (fallbackProps) => {
  return (props, propName, componentName) => {
    const prop = props[propName];
    if (prop !== undefined) return;
    if (!fallbackProps)
      return new Error(
        `The prop \`${propName} is marked as required in \`${componentName}, but its value is \`undefined\`.`
      );
    for (const fallbackProp of fallbackProps) {
      if (props[fallbackProp] !== undefined) return;
    }
    return new Error(
      `The props \`${fallbackProps}\` and \`${propName} are marked as at least one required in \`${componentName}, but their values are all \`undefined\`.`
    );
  };
};