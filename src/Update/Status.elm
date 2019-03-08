module Update.Status exposing (..)

import Http
import Json.Encode as Encode
import Json.Decode as Decode
import Model.Status exposing (Model, Msg(..), JsonData)
import Utils.Request exposing (getMstDataJson)

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    GetMstDataJson ->
      ( model, getMstDataJson )
    GotMstDataJson json ->
      case json of
        Ok result ->
          let
              json_data = JsonData result.status result.stages result.light result.heavy_main result.heavy_sub result.practice_main result.practice_sub result.types
          in
              ( { model | json_data = json_data }, Cmd.none )
        Err _ ->
          ( model, Cmd.none )

