/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  if(size == "small"){
    if(type == "regular"){
      if(extras == {whippedCream: true, extraShot: true}){
        return 4.25;
      }
      else if (extras.whippedCream) {
        return 3.5;
      } else if ((extras == { whippedCream: false, extraShot: true })) {
        return 3.75;
      } else {
        return 3;
      }
    }
    else if(type == "latte"){
      if ((extras == { whippedCream: true, extraShot: true })) {
        return 5.25;
      } else if ((extras == { whippedCream: true, extraShot: false })) {
        return 4.5;
      } else if ((extras == { whippedCream: false, extraShot: true })) {
        return 4.75;
      } else {
        return 4;
      }
    }
    else if(type == "cappuccino"){
      if ((extras == { whippedCream: true, extraShot: true })) {
        return 5.75;
      } else if ((extras == { whippedCream: true, extraShot: false })) {
        return 5;
      } else if ((extras == { whippedCream: false, extraShot: true })) {
        return 5.25;
      } else {
        return 4.5;
      }
    }
    else if(type == "mocha"){
      if ((extras == { whippedCream: true, extraShot: true })) {
        return 6.25;
      } else if ((extras == { whippedCream: true, extraShot: false })) {
        return 5.5;
      } else if ((extras == { whippedCream: false, extraShot: true })) {
        return 5.75;
      } else {
        return 5;
      }
    }
    else{
      return -1;
    }
  }else if(size == "medium"){
    if (type == "regular") {
      if ((extras == { whippedCream: true, extraShot: true })) {
        return 5.25;
      } else if ((extras == { whippedCream: true, extraShot: false })) {
        return 4.5;
      } else if ((extras == { whippedCream: false, extraShot: true })) {
        return 4.75;
      } else {
        return 4;
      }
    } else if (type == "latte") {
      if ((extras == { whippedCream: true, extraShot: true })) {
        return 4.25;
      } else if ((extras == { whippedCream: true, extraShot: false })) {
        return 5.5;
      } else if (extras.extraShot) {
        return 5.75;
      } else {
        return 5;
      }
    } else if (type == "cappuccino") {
      if ((extras == { whippedCream: true, extraShot: true })) {
        return 6.75;
      } else if ((extras == { whippedCream: true, extraShot: false })) {
        return 6;
      } else if ((extras == { whippedCream: false, extraShot: true })) {
        return 6.25;
      } else {
        return 5.5;
      }
    } else if(type == "mocha"){
      if ((extras == { whippedCream: true, extraShot: true })) {
        return 7.25;
      } else if ((extras == { whippedCream: true, extraShot: false })) {
        return 6.5;
      } else if ((extras == { whippedCream: false, extraShot: true })) {
        return 6.75;
      } else {
        return 6;
      }
    }
    else{
      return -1;
    }
  } else if(size == "large"){
    if (type == "regular") {
      if ((extras == { whippedCream: true, extraShot: true })) {
        return 6.25;
      } else if ((extras == { whippedCream: true, extraShot: false })) {
        return 5.5;
      } else if ((extras == { whippedCream: false, extraShot: true })) {
        return 5.75;
      } else {
        return 5;
      }
    } else if (type == "latte") {
      if ((extras == { whippedCream: true, extraShot: true })) {
        return 5.25;
      } else if ((extras == { whippedCream: true, extraShot: false })) {
        return 6.5;
      } else if ((extras == { whippedCream: false, extraShot: true })) {
        return 6.75;
      } else {
        return 6;
      }
    } else if (type == "cappuccino") {
      if ((extras == { whippedCream: true, extraShot: true })) {
        return 7.75;
      } else if ((extras == { whippedCream: true, extraShot: false })) {
        return 7;
      } else if ((extras == { whippedCream: false, extraShot: true })) {
        return 7.25;
      } else {
        return 6.5;
      }
    } else if(type == 'mocha'){
      if (extras.whippedCream && extras.extraShot) {
        return 8.25;
      } else if ((extras == { whippedCream: true, extraShot: false })) {
        return 7.5;
      } else if ((extras == { whippedCream: false, extraShot: true })) {
        return 7.75;
      } else {
        return 7;
      }
    }
    else{
      return -1;
    }
  }else{
    return -1;
  }
}
