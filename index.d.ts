interface optionType{
  title?: string,
  color?: string,
  timestamp?: boolean
}

class HangmanGame{
  gameEmbed: any;
  inGame: boolean;
  word: string;
  guessed: any[];
  wrongs: number;
  options: optionType;
  
  constructor(options: optionType);
  
  public newGame(msg: string): void;
  public makeGuess(reaction: string): any;
  public gameOver(win: any): any;
  public getDescription(): string;
  public waitForReaction(): any;
  
  public setTimestamp(): void;
  public setEmbedColor(color: string): void;
  public setEmbedTitle(title: string): void;
}

export default HangmanGame
