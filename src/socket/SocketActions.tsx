import { ReactElement } from "react";
import { useSubscription } from "react-stomp-hooks";
import {
  TOPIC_GAME_ERRORS,
  TOPIC_GAME_PLAYER_JOINED,
  TOPIC_GAME_UPDATE_GAME,
  TOPIC_GAME_UPDATE_PLAYER,
  USER_ERRORS,
} from "./SocketTopics";
import { useAppDispatch } from "../redux/hooks";
import UpdateGameDto from "../assets/dto/UpdateGameDto";
import UpdatePlayerDto from "../assets/dto/UpdatePlayerDto";
import { addPlayer, updateGame, updatePlayer } from "../redux/reducers/game";
import PlayerDto from "../assets/dto/PlayerDto";
import GameDto from "../assets/dto/GameDto";
import ErrorDto from "../assets/dto/ErrorDto";
import { addError } from "../redux/reducers/errors";

export function SocketActions({ game }: { game: GameDto }): ReactElement {
  const dispatch = useAppDispatch();

  useSubscription(TOPIC_GAME_ERRORS(game.id), (message) => {
    const errorDto = JSON.parse(message.body) as ErrorDto;
    dispatch(addError(errorDto));
  });
  useSubscription(USER_ERRORS, (message) => {
    const errorDto = JSON.parse(message.body) as ErrorDto;
    dispatch(addError(errorDto));
  });
  useSubscription(TOPIC_GAME_UPDATE_GAME(game.id), (message) => {
    const updateGameDto = JSON.parse(message.body) as UpdateGameDto;
    dispatch(updateGame(updateGameDto));
  });
  useSubscription(TOPIC_GAME_UPDATE_PLAYER(game.id), (message) => {
    const updatePlayerDto = JSON.parse(message.body) as UpdatePlayerDto;
    dispatch(updatePlayer(updatePlayerDto));
  });
  useSubscription(TOPIC_GAME_PLAYER_JOINED(game.id), (message) => {
    const playerDto = JSON.parse(message.body) as PlayerDto;
    dispatch(addPlayer(playerDto));
  });
  return <></>;
}

export default SocketActions;
