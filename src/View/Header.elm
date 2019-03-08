module View.Header exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Model.Header exposing (Model, Msg(..), Menu(..))

view : Model -> Html Msg
view model =
  nav [ class "navbar navbar-expand-lg navbar-dark bg-dark" ]
      [ a [ class "navbar-brand text-white" ] [ text "TEST" ]
      , div [ class "collapse navbar-collapse" ]
            [ ul [ class "navbar-nav" ]
                [ li [ class "nav-item" ] [ a [ class "nav-link", class ( checkActive model Menu1 ), onClick ( ClickMenu Menu1 ) ] [ text "Menu1" ] ]
                , li [ class "nav-item" ] [ a [ class "nav-link", class ( checkActive model Menu2 ), onClick ( ClickMenu Menu2 ) ] [ text "Menu2" ] ]
                ]
            ]
      ]

checkActive : Model -> Menu -> String
checkActive model menu =
  if model.selected == menu then
    "active"
  else
    ""
