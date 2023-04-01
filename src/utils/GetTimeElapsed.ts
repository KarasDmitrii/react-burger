export function getTimeElapsed(timestamp: string): string {
  const now: Date = new Date();
  const then: Date = new Date(timestamp);
  const seconds: number = Math.round((now.getTime() - then.getTime()) / 1000);

  
    if (isToday(then)) {
      return `сегодня ${formatDate(then)}`;
    } else if (isYesterday(then)) {
      return `вчера ${formatDate(then)}`;
    } else {
      const days: number = Math.floor(seconds / 86400);
      return `${days} ${declension(days, ['день', 'дня', 'дней'])} назад ${formatDate(then)}`;
    }
 
}

  function declension(number: number, titles: [string, string, string]): string {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[Math.min(number % 10, 5)]
    ];
  }

  function isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  function isYesterday(date: Date): boolean {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    );
  }

  function formatDate(date: Date): string {
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  }
