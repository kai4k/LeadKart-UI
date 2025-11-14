export function getColorCodes(classes: string[]): string[] {
  const colors: string[] = [];

  classes.forEach((className) => {
    const element = document.createElement("div");
    element.className = className.trim();
    document.body.appendChild(element);
    const computedStyle = window.getComputedStyle(element);
    colors.push(computedStyle.backgroundColor);
    document.body.removeChild(element);
  });

  return colors;
}

export function getColorCodesHash(classNames?: string[]) {
  const colors: string[] = [];
  classNames?.forEach((className) => {
    const element = document.createElement("div");
    element.className = className.trim();
    document.body.appendChild(element);
    const computedColor = window.getComputedStyle(element).backgroundColor;
    colors.push(computedColor);
    document.body.removeChild(element);
  });
  return colors;
}

export function exportTable(exportData: any) {
  if (exportData.length > 0) {
    const headers = Object.keys(exportData[0]).join(",");
    const rows = exportData.map((data: string) =>
      Object.values(data).join(",")
    );
    const csvContent = [headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "emails.csv";
    link.click();
  }
}

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${date.getDate()} ${date.toLocaleString("en-US", {
    month: "long",
  })}, ${date.getFullYear()}`;
};
