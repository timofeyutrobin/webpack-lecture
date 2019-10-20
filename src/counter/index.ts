import './index.scss';

const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

export default class Counter {
    public readonly blockClassName = 'counter';

    public readonly element: HTMLElement;

    private titleElement: HTMLElement;
    private daysElement: HTMLElement;

    private daysToNewYear: number;
    private beforeWord: string;
    private daysWord: string;

    constructor() {
        this.daysToNewYear = this.getDaysToNewYear();
        this.beforeWord = this.getBeforeWord();
        this.daysWord = this.getDaysWord();

        this.element = document.createElement('div');
        this.element.classList.add(this.blockClassName);

        this.titleElement = document.createElement('h1');
        this.titleElement.classList.add(`${this.blockClassName}__header`);
        this.titleElement.textContent = `До Нового года ${this.beforeWord}`;

        this.daysElement = document.createElement('div');
        this.daysElement.classList.add(`${this.blockClassName}__count`);
        this.daysElement.textContent = `${this.daysToNewYear} ${this.daysWord}`;

        this.element.appendChild(this.titleElement);
        this.element.appendChild(this.daysElement);
    }

    public update() {
        this.daysToNewYear = this.getDaysToNewYear();
        this.daysWord = this.getDaysWord();
        this.beforeWord = this.getBeforeWord();

        this.titleElement.textContent = `До Нового года ${this.beforeWord}`;
        this.daysElement.textContent = `${this.daysToNewYear} ${this.daysWord}`;
    }

    private getDaysToNewYear() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const nextYearFirstDay = new Date(currentYear + 1, 0, 1, 0);

        return Math.round((nextYearFirstDay.getTime() - now.getTime()) / MILLISECONDS_IN_DAY);
    }

    private getBeforeWord() {
        const lastDigit = this.daysToNewYear % 10;

        if (this.daysToNewYear == 11 || lastDigit !== 1) {
            return 'осталось';
        }

        return 'остался';
    }

    private getDaysWord() {
        const lastDigit = this.daysToNewYear % 10;

        if (
            (this.daysToNewYear > 10 && this.daysToNewYear < 15) ||
            (lastDigit >= 5 && lastDigit <= 9) ||
            lastDigit === 0
        ) {
            return 'дней';
        }

        if (lastDigit === 1) {
            return 'день';
        }

        return 'дня';
    }
}
