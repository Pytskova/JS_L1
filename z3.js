function whatCentury(year)
{
    let century = (year % 100 === 0) ? year / 100 : Math.floor(year / 100) + 1;
    let suffixes = { 1: "st", 2: "nd", 3: "rd" };
    let suffix = ["11", "12", "13"].includes(century % 100 + "") ? "th" : suffixes[century % 10] || "th";
    return century + suffix;
}
