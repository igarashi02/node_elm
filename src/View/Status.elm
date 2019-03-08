module View.Status exposing (..)

import Html exposing (..)
import Model.Status exposing (Model, Msg(..))

view : Model -> Html Msg
view model =
  div [] []

-- viewTable =
--   table []
--         [ thead []
--                 [ th [] [ text "t_type" ]
--                 , th [] [ text "stage" ]
--                 , th [] [ text "stage" ]
--                 , th [] [ text "stage" ]
--                 , th [] [ text "stage" ]
--                 , th [] [ text "stage" ]
--                 , th [] [ text "stage" ]
--                 , th [] [ text "stage" ]
--                 , th [] [ text "stage" ]
--                 , th [] [ text "stage" ]
--                 , th [] [ text "stage" ]
--                 ]
--         , tbody [] []
--         ]
