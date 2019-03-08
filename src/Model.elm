module Model exposing (..)

import Model.Header as Header
import Model.Status as Status

type Msg
  = HeaderMsg Header.Msg
  | StatusMsg Status.Msg

type alias Model =
  { headerModel : Header.Model
  , statusModel : Status.Model
  }

init : ( Model, Cmd Msg )
init =
  (
    { headerModel = Header.init
    , statusModel = Status.init
    }, Cmd.none
  )
