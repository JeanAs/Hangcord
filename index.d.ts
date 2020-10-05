interface optionType{
  title?: string,
  color?: string
}

class HangmanGame{
  gameEmbed: any;
  inGame: boolean;
  word: string;
  guessed: any[];
  wrongs: number;
  options: optionType;
  
  public constructor(options: optionType);
  
  public newGame(msg: string): void;
  public makeGuess(reaction: string): any;
  public gameOver(win: any): any;
  public getDescription(): string;
  public waitForReaction(): any;
}

export default HangmanGame
