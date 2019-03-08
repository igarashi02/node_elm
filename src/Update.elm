module Update exposing (..)

import Model exposing (Model, Msg(..))
import Update.Header as Header
import Update.Status as Status

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    HeaderMsg subMsg ->
      let
          updateHeaderModel = Header.update subMsg model.headerModel
      in
          ( { model | headerModel = updateHeaderModel }, Cmd.none )
    StatusMsg subMsg ->
      let
          ( updateStatusModel, stausCmd ) = Status.update subMsg model.statusModel
      in
          ( { model | statusModel = updateStatusModel }, Cmd.map StatusMsg stausCmd )
