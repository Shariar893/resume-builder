export function calculateDuration(
  startDate: string | Date,
  endDate: string | Date
): string {
  startDate = new Date(startDate);
  endDate = new Date(endDate);

  if (startDate > endDate) {
    const temp = startDate;
    startDate = endDate;
    endDate = temp;
  }

  const diffMs: number = endDate.getTime() - startDate.getTime();

  const diffDays: number = diffMs / (1000 * 60 * 60 * 24);

  if (diffDays < 30) {
    return `${Math.floor(diffDays)} days`;
  }

  const diffMonths: number =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  if (diffMonths < 12) {
    return `${Math.floor(diffMonths)} months`;
  }

  const diffYears: number = diffMonths / 12;
  const wholeYears: number = Math.floor(diffYears);
  const remainingMonths: number = diffMonths % 12;

  if (remainingMonths === 0) {
    return `${wholeYears} years`;
  } else {
    const fractionYears: number = parseFloat((remainingMonths / 12).toFixed(1));
    const halfYears: string =
      fractionYears === 0.5 ? "1/2" : fractionYears.toString();
    return `${wholeYears} ${halfYears} years`;
  }
}
