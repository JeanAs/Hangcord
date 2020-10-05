class HangmanGame{
  gameEmbed: any;
  inGame: boolean;
  word: string;
  guessed: any[];
  wrongs: number;
  
  public constructor();
  
  public newGame(msg: string, options: optionType): void;
  public makeGuess(reaction: string): any;
  public gameOver(win: any): any;
  public getDescription(): string;
  public waitForReaction(): any;
}

export default HangmanGame
