import { LengthOfTuple } from "./LengthOfTuple";

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = LengthOfTuple<tesla>  // expected 4
type spaceXLength = LengthOfTuple<spaceX> // expected 5
