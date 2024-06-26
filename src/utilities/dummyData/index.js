import {AppImages} from '../../assets';
import {SCREEN} from '../../constants';
import {useHome} from '../../screens/App/home/hooks';

export const PlanData = [
  {
    id: '1',
    title: `Ad-Free Subscription\n($4.99/month)`,
    description:
      'Upgrade to our monthly subscription for an uninterrupted, ad-free experience.',
    showTag: 'Ok',
  },
  {
    id: '2',
    title: 'Free with Ads',
    description:
      'Enjoy the full app experience at no cost, with occasional in-app advertisements',
  },
];

export const GamesData = [
  {
    id: '1',
    image: AppImages.Game1,
    name: 'Sudoku Word Trivia ',
    score: '3/150',
    volume: 'Volume 1',
    star: 'All Star Nines',
    description:
      'Crazy For Sudoku Word Trivia All Star Nines (150 Puzzles) Digital Copy',
    onPress: SCREEN.sudukuGame,
  },
  {
    id: '2',
    image: AppImages.Game2,
    name: 'Color Block Sudoku',
    volume: 'BOOK 1',
    onPress: SCREEN.colorBlockGame,
  },
];

export const ColorBoxData = [
  {
    id: '1',
    color: '#FF0000',
  },
  {
    id: '2',
    color: '#00ABFF',
  },
  {
    id: '3',
    color: '#00FFAB',
  },
  {
    id: '4',
    color: '#FFAB00',
  },
  {
    id: '5',
    color: '#00FF00',
  },
  {
    id: '6',
    color: '#AB00FF',
  },
  {
    id: '7',
    color: '#FF00AB',
  },
  {
    id: '8',
    color: '#ABFF00',
  },
];

export const ProfileCardData = [
  {
    id: '1',
    title: 'Word Trivia Average Time Per Game',
    score: '04:85',
    percent: '+23.47%',
  },
  {
    id: '2',
    title: 'Word Trivia Hints Used per Game',
    score: '300',
    percent: '-23.47%',
    arrowDown: 'Ok',
  },
  {
    id: '3',
    title: 'Color Trivia Average Time Per Game',
    score: '03:85',
    percent: '+13.47%',
  },
  {
    id: '4',
    title: 'Color Trivia Hints Used per Game',
    score: '110',
    percent: '+23.47%',
  },
];

export const InstructionBtnsData = [
  {
    id: '1',
    volume: 'VOLUME 1',
    description:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    id: '2',
    volume: 'VOLUME 2',
    description:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    id: '3',
    volume: 'VOLUME 3',
    description:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    id: '4',
    volume: 'VOLUME 4',
    description:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    id: '5',
    volume: 'VOLUME 5',
    description:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    id: '6',
    volume: 'VOLUME 6',
    description:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    id: '7',
    volume: 'VOLUME 7',
    description:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
];

export const InitalSudokuGameData = [
  'S',
  null,
  null,
  'I',
  null,
  null,
  'O',
  'T',
  null,
  'O',
  'B',
  null,
  'N',
  'D',
  null,
  null,
  'S',
  'M',
  null,
  null,
  'C',
  'M',
  null,
  null,
  null,
  'B',
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  'M',
  null,
  null,
  'M',
  null,
  'O',
  'B',
  'T',
  'N',
  'I',
  'D',
  null,
  'D',
  'I',
  null,
  null,
  'C',
  null,
  null,
  'O',
  null,
  null,
  'N',
  null,
  null,
  null,
  null,
  'B',
  null,
  null,
  null,
  null,
  'S',
  'D',
  'M',
  null,
  null,
  'N',
  'C',
  'T',
  null,
  'B',
  null,
  'N',
  'I',
  'S',
  null,
  null,
];

export const InitialColorBlockGameData = [
  null,
  null,
  '#FFAB00',
  null,
  '#ABFF00',
  '#00FFAB',
  '#AB00FF',
  null,
  null,
  '#FF0000',
  null,
  null,
  '#00ABFF',
  null,
  null,
  null,
  '#FFAB00',
  null,
  null,
  null,
  '#AB00FF',
  null,
  null,
  null,
  '#00ABFF',
  '#FF00AB',
  null,
  null,
  null,
  null,
  '#ABFF00',
  null,
  null,
  '#FFAB00',
  '#AB00FF',
  null,
  null,
  null,
  null,
  '#FF0000',
  null,
  '#FFAB00',
  null,
  null,
  null,
  null,
  '#ABFF00',
  '#00FF00',
  null,
  null,
  '#AB00FF',
  null,
  null,
  null,
  null,
  '#FF00AB',
  '#FF0000',
  null,
  null,
  null,
  '#00FFAB',
  null,
  null,
  null,
  '#FFAB00',
  null,
  null,
  null,
  '#00FF00',
  null,
  null,
  '#FF00AB',
  null,
  null,
  '#ABFF00',
  '#00FFAB',
  '#FF00AB',
  null,
  '#00ABFF',
  null,
  null,
];
