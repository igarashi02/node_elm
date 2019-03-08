module Model.Header exposing (..)

type Msg = ClickMenu Menu

type Menu = Menu1 | Menu2

type alias Model =
  { selected : Menu }

init : Model
init =
  { selected = Menu1 }
