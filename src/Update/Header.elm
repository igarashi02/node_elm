module Update.Header exposing (..)

import Model.Header exposing (Model, Msg(..))

update : Msg -> Model -> Model
update msg model =
  case msg of
    ClickMenu menu ->
      { model | selected = menu }
