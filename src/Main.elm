import Browser

import Model exposing (init, Model, Msg(..))
import Update exposing (update)
import View exposing (view)
import Subscriptions exposing (subscriptions)

main : Program () Model Msg
main =
  Browser.element
  { init = \_ -> init
  , update = update
  , view = view
  , subscriptions = subscriptions
  }
