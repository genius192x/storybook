import { fn } from '@storybook/test';
import { createTable } from './Table';
import { Description } from '@storybook/blocks';

export default {
  title: 'Example/Table',
  tags: ['autodocs'],
  render: ({ text, ...args }) => {
    return createTable({ text, ...args });
  },
  argTypes: {
	background: {
		control: { type: 'text' },
    	description: 'Ссылка на картинку для фона письма'
    },
	headerImage: {
		control: { type: 'text' },
    	description: 'Ссылка на картинку в хедере письма (с командой)'
    },
	typeGame: {
		control: { type: 'text' },
    	description: 'Ссылка на картинку с назанием вида спорта'
    },
	league: {
		control: { type: 'text' },
		description: 'Лига турнира'
	},
	stage: {
		control: { type: 'text' },
		description: 'Стадия турнира'
	},
	firstTeamLogo: {
		control: { type: 'text' },
    	description: 'Ссылка на логотип первой команды'
    },
	firstTeamName: {
		control: { type: 'text' },
    	description: 'Название первой команды'
    },
	firstTeamCity: {
		control: { type: 'text' },
    	description: 'Город первой команды'
    },
	matchDate: {
		control: { type: 'text' },
		description: 'Дата матча'
	},
	matchTime: {
		control: { type: 'text' },
		description: 'Время матча'
	},
	stadiumName: {
		control: { type: 'text' },
		description: 'Название стадиона'
	},
	stadiumAdress: {
		control: { type: 'text' },
		description: 'Адрес стадиона'
	},
	secondTeamLogo: {
		control: { type: 'text' },
    	description: 'Ссылка на логотип второй команды'
    },
	secondTeamName: {
		control: { type: 'text' },
    	description: 'Название второй команды'
    },
	secondTeamCity: {
		control: { type: 'text' },
    	description: 'Город второй команды'
    },
    buttonText: {
		control: { type: 'text' },
    	description: 'Текст кнопки'
    },
	buttonLink: {
		control: { type: 'text' },
    	description: 'Сслыка для перехода по нажатию кнопки'
    },
	footerImage: {
		control: { type: 'text' },
    	description: 'Ссылка на картинку в футере'
    },
  },
};

export const Primary = {
  args: {
	background: 'https://bitrix24public.com/anoprofessionalnyygandbolnyyklub.bitrix24.ru/docs/pub/81472756290cb84c6a40ee3710c7e602/showFile/?&token=aa5lopsv5byp',
	headerImage: 'https://bitrix24public.com/anoprofessionalnyygandbolnyyklub.bitrix24.ru/docs/pub/b2da36f20b413c25c2af537ad44cfed3/showFile/?&token=d2mymyvcufym',
	typeGame: 'https://bitrix24public.com/anoprofessionalnyygandbolnyyklub.bitrix24.ru/docs/pub/fa95935275bfeb66bb211bbca78f914a/showFile/?&token=qfsqzsszohgb',
	league: 'OLIMPBET СУПЕРЛИГА',
	stage: '1/4 ФИНАЛА',
	firstTeamLogo: 'https://bitrix24public.com/anoprofessionalnyygandbolnyyklub.bitrix24.ru/docs/pub/7d15236959e5f868c487840722a625f3/showFile/?&token=jkburbuyygib',
	firstTeamName: 'ЦСКА',
	firstTeamCity: 'Москва',
    matchDate: '27.04.24',
	matchTime: '20:00',
	secondTeamLogo: 'https://bitrix24public.com/anoprofessionalnyygandbolnyyklub.bitrix24.ru/docs/pub/b056d738eb58eef10f78493cf473123f/showFile/?&token=aq7nvtrk59gt',
	secondTeamName: 'Звезда',
	secondTeamCity: 'Звенигород',
	stadiumName: 'ВА «Динамо»',
	stadiumAdress: 'Москва, ул. Василисы Кожиной, д. 13	',
	buttonText: 'КУПИТЬ БИЛЕТ',
	buttonLink: 'https://whccska.ru/tickets/?utm_source=matchday_newsletter&utm_medium=email&utm_campaign=mail_list_id%7Ccompany_name%7C17.04.2024',
	footerImage: 'https://bitrix24public.com/anoprofessionalnyygandbolnyyklub.bitrix24.ru/docs/pub/908b89652a2394ea799598a94b696a14/showFile/?&token=w43nh13zm3uo'
  },
};
