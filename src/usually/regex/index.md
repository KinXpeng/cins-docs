---
nav:
  title: Common
  path: /usually
---

## License plate number 

### General license plate

```ts
/**
 * Check whether it is license plate number (excluding trailer)
 * Special vehicle calibration is currently not supported
 * @param str
 * @returns
 */
const isVehicleNumber = (str: string): boolean => {
  // Traditional fuel
  // New energy

  const pattern =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-Z]{1}(([A-HJK]{1}[A-HJ-NP-Z0-9]{1}[0-9]{4})|([0-9]{5}[A-HJK]{1})|(?=(.*[A-HJ-NP-Z]){0,2})(?=(.*[0-9]){3,5})[A-HJ-NP-Z0-9]{5})$/;
  return pattern.test(str);
};
```

### Trailer

```ts
/**
 * Check whether it is a license plate number
 * @param str
 * @returns
 */
const isTrailerNumber = (str: string): boolean => {
  const pattern =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-Z]{1}[A-Z0-9]{4}[挂]{1}$/;
  return pattern.test(str);
};
```

## Mobile phone no.

```ts
/**
 *	The mainland mobile phone number has 11 digits. Matching format: the first three digits are fixed + the last eight digits are arbitrary
 *	The first three bytes in this method are:
 * 13+any number
 * 145,147,149
 * 15+Any number divided by 4(Don't write ^4, that way the letter will be considered correct)
 * 166
 * 17+3,5,6,7,8
 * 18+any number
 * 198,199
 */
const isMobilePhone = (str: string): boolean => {
  const pattern =
    /^((13[0-9])|(14[0,1,4-9])|(15[0-3,5-9])|(16[2,5,6,7])|(17[0-8])|(18[0-9])|(19[0-3,5-9]))[0-9]{8}$/;
  return pattern.test(str);
};
```

## ID number

```ts
/**
 * Verification certificate number
 * @returns
 */
const isIDNumber = (str: string): boolean => {
  // 15-digit ID regular expression
  const arg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
  // 18-digit ID regular expression
  const arg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[X])$/;

  // The ordinary e-passport is issued to Chinese citizens who go abroad for non-official reasons such as residence, family visit, study, employment, travel and business activities. The passport number format is E+8 digits
  const arg3 = /^E\d{8}$/;

  // Official passport:SE+7 digital coding
  const arg4 = /^SE\d{7}$/;

  // Diplomatic passport:DE+7 digital coding
  const arg5 = /^DE\d{7}$/;

  // Ordinary Service Passport:PE+7 digital coding
  const arg6 = /^PE\d{7}$/;

  // Passports of the Macao Special Administrative Region shall be issued to Chinese citizens who have permanent identity cards of the Macao Special Administrative Region in the following format:MA+7 serial number
  const arg7 = /^MA[A-Z0-9]{7}$/;

  // Hong Kong Special Administrative Region passports are issued to Chinese citizens who have a Hong Kong permanent identity card and the right of abode in the Hong Kong Special Administrative Region. The passport number format is:K+8 serial number
  const arg8 = /^K[A-Z0-9]{7}$/;

  if (
    arg1.test(str) ||
    arg2.test(str) ||
    arg3.test(str) ||
    arg4.test(str) ||
    arg5.test(str) ||
    arg6.test(str) ||
    arg7.test(str) ||
    arg8.test(str)
  ) {
    return true;
  } else {
    return false;
  }
};
```

## Id card

```ts
/**
 * Verify the ID number
 * @returns
 */
const isIdentityNumber = (str: string): boolean => {
  // 18-digit ID regular expression
  const pattern = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[X])$/;
  return pattern.test(str);
};
```

## Email address format

```ts
/**
 * Check whether the email box format is correct
 * @param str
 * @returns
 */
const isEmail = (str: string): boolean => {
  const pattern = /^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$/;
  return pattern.test(str);
};
```

## Whether the account is valid

```ts
/**
 * Valid account (start with a letter, 5-16 bytes allowed, alphanumeric underscore allowed)
 * @param str
 * @returns
 */
const isValidAccount = (str: string): boolean => {
  const pattern = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
  return pattern.test(str);
};
```

## A strong password

```ts
/**
 * Strong password (must contain a combination of uppercase and lowercase letters and numbers, cannot use special characters, and must be 8-16 in length) :
 * @param str
 * @returns
 */
const isStrongPassword(str: string): boolean => {
  const pattern = /^(?=.d)(?=.[a-z])(?=.*[A-Z]).{8,16}$/;
  return pattern.test(str);
}
```

## Hexadecimal color

```ts
/**
 * Checks whether the color is hexadecimal
 * @param str
 * @returns
 */
const isHexColor = (str: string): boolean => {
  const pattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return pattern.test(str);
};
```

## The integer

```ts
/**
 * Check whether the value is an integer
 * @param str
 * @returns
 */
const isInteger = (str: string): boolean => {
  const pattern = /^-?\\d+$/;
  return pattern.test(str);
};
```

## Non-negative integer

```ts
/**
 * Check whether it is a non-negative integer (positive integer +0)
 * @param str
 * @returns
 */
const isNonNegativeInteger = (str: string): boolean => {
  const pattern = /^\d+$/;
  return pattern.test(str);
};
```

## Positive integer

```ts
/**
 * Check whether the value is a positive integer
 * @param str
 * @returns
 */
const isPositiveInteger = (str: string): boolean => {
  const pattern = /^[0-9]*[1-9][0-9]*$/;
  return pattern.test(str);
};
```

## Are floating point Numbers

```ts
/**
 * Checks for positive floating point numbers
 * @param str
 * @returns
 */
const isFPNumber = (str: string): boolean => {
  const pattern =
    /^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
  return pattern.test(str);
};
```

## Non-negative floating point number

```ts
/**
 * Check for nonnegative floating point numbers (positive floating point numbers +0)
 * @param str
 * @returns
 */
const isNonNegFloatNumber = (str: string): boolean => {
  const pattern = /^(\+)?\d+(\.\d+)?$/;
  return pattern.test(str);
};
```
