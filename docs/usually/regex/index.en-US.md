---
title: Regex
order: 4
nav:
  title: Usually
  order: 1
---

## Regular syntax reference

<div style="padding:0 10px">
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">.</span> - All characters except line breaks.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">^</span> - The beginning of a string.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">$</span> - End of a string.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">\d,\w,\s</span> - Matches digits, characters, and Spaces.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">\D,\W,\S</span> - Matches non-digits, non-characters, and non-spaces.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">[abc]</span> - Matches a letter in a, b, or c.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">[a-z]</span> - Matches a letter from a to z.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">[^abc]</span> - Matches any letter other than a, b, or c.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">aa|bb</span> - Matches aa or bb.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">?</span> - 0 or 1 matches.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">*</span> - Matches 0 or more times.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">+</span> - Match 1 or more times.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">{n}</span> - Match n times.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">n,</span> - Matches more than n times.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">{m,n}</span> - At least m matches and at most n matches.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">(expr)</span> - Capture the expr subpattern and use it with \1.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">(?:expr)</span> - The captured subpattern is ignored.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">(?=expr)</span> - Forward precheck mode expr.</p>
  <p style="color:#8e8c84;margin:4px 0"><span style="color:#e83e8c;font-weight:bold">(?!expr)</span> - Negative pre-check mode expr.</p>
</div>

## License plate number

### General license plate

```ts
/**
 * Check whether it is license plate number (excluding trailer)
 * Special vehicle calibration is currently not supported
 * @param str
 * @return
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
 * @return
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

## Phone number or landline number

```ts
/**
 *	Mainland mobile phone number 11 digits
 *  Landline: The area code:3-4 digits Number: 5-8 digits
 */
const isMobileOrLandline = (str: string): boolean => {
  const pattern = /^((0\d{2,3}\d{5,8})|(1[3456789]\d{9}))$/;
  return pattern.test(str);
};
```

## ID number

```ts
/**
 * Verification certificate number
 * @return
 */
const isIDNumber = (str: string): boolean => {
  // 15-digit ID regular expression
  const arg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
  // 18-digit ID regular expression
  const arg2 =
    /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[X])$/;

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
 * @return
 */
const isIdentityNumber = (str: string): boolean => {
  // 18-digit ID regular expression
  const pattern =
    /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[X])$/;
  return pattern.test(str);
};
```

## Email address format

```ts
/**
 * Check whether the email box format is correct
 * @param str
 * @return
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
 * @return
 */
const isValidAccount = (str: string): boolean => {
  const pattern = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
  return pattern.test(str);
};
```

## Hexadecimal color

```ts
/**
 * Checks whether the color is hexadecimal
 * @param str
 * @return
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
 * @return
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
 * @return
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
 * @return
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
 * @return
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
 * @return
 */
const isNonNegFloatNumber = (str: string): boolean => {
  const pattern = /^(\+)?\d+(\.\d+)?$/;
  return pattern.test(str);
};
```

## Postal code

```ts
/**
 * Postal code
 * @param str string
 * @return
 */
const verifyPostalCode = (str: string): boolean => {
  if (!/^[1-9][0-9]{5}$/.test(str)) return false;
  else return true;
};
```

## Password

### Cryptographic strength

```ts
/**
 * Cryptographic strength
 * @param str string
 * @description Weak: pure numbers, pure letters, pure special characters
 * @description Medium: Letters + digits, letters + special characters, digits + special characters
 * @description Strong: letters + digits + special characters
 * @return Returns the processed string: weak, medium, and strong
 */
const verifyPasswordStrength = (str: string): boolean => {
  let v = '';
  // Weak: pure numbers, pure letters, pure special characters
  if (/^(?:\d+|[a-zA-Z]+|[!@#$%^&\.*]+){6,16}$/.test(str)) v = 'Weak';
  // Medium: Letters + digits, letters + special characters, digits + special characters
  if (
    /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&\.*]+$)[a-zA-Z\d!@#$%^&\.*]{6,16}$/.test(
      str,
    )
  )
    v = 'Medium';
  // Strong: letters + digits + special characters
  if (
    /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&\.*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&\.*]+$)(?![\d!@#$%^&\.*]+$)[a-zA-Z\d!@#$%^&\.*]{6,16}$/.test(
      str,
    )
  )
    v = 'Strong';
  // result
  return v;
};
```

### Password format

```ts
/**
 * Password format (The value must start with a letter and contain only letters, digits, and underscores (_))
 * @param str string
 * @return
 */
const verifyPassword = (str: string): boolean => {
  if (!/^[a-zA-Z]\w{5,15}$/.test(str)) return false;
  else return true;
};
```

### Strong cipher 1

```ts
/**
 * Strong cipher (The value contains 6 to 16 letters, digits, and special characters)
 * @param str string
 * @return
 */
const verifyPasswordPowerful = (str: string): boolean => {
  if (
    !/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&\.*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&\.*]+$)(?![\d!@#$%^&\.*]+$)[a-zA-Z\d!@#$%^&\.*]{6,16}$/.test(
      str,
    )
  )
    return false;
  else return true;
};
```

### Strong cipher 2

```ts
/**
 * Strong password (must contain a combination of uppercase and lowercase letters and numbers, cannot use special characters, and must be 8-16 in length) :
 * @param str
 * @return
 */
const isStrongPassword(str: string): boolean => {
  const pattern = /^(?=.d)(?=.[a-z])(?=.*[A-Z]).{8,16}$/;
  return pattern.test(str);
}
```

### Strong cipher 3

```ts
/**
 * Strong cipher
 * 1.At least 8 bits
 * 2.At least 3 types of Minuscule, uppercase letters, numbers and special characters
 * 3.Cannot have continuous input of 3 or more digits on the keyboard
 * @param {string} str
 * @return
 */
const isStrongPassword = (str: string): boolean => {
  const pattern =
    /^(?!.*?(\w)\1{2})((?=(.*\d))(?=(.*[a-z]))(?=(.*[A-Z])|.*[-+_!@#$%^&*.,?])|(?=(.*\d))(?=(.*[A-Z]))(?=(.*[a-z])|.*[-+_!@#$%^&*.,?])|(?=(.*[A-Z]))(?=(.*[a-z]))(?=(.*\d)|.*[-+_!@#$%^&*.,?]))(?!.*?(?:qwe|wer|ert|rty|tyu|yui|uio|iop|asd|sdf|dfg|fgh|ghj|hjk|jkl|zxc|xcv|cvb|vbn|bnm|123|234|345|456|567|678|789|890)).{8,}$/;
  return pattern.test(str);
};
```

## IP address

```ts
/**
 * IP address
 * @param str string
 * @return
 */
const verifyIPAddress = (str: string): boolean => {
  if (
    !/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(
      str,
    )
  )
    return false;
  else return true;
};
```

## Amount separation

```ts
/**
 * The amount is separated by a ', '
 * @param str
 * @return
 */
const numberComma = (str: string): string => {
  let v: any = verifyNumberIntegerAndFloat(str);
  v = v.toString().split('.');
  v[0] = v[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  v = v.join('.');
  return v;
};
```
