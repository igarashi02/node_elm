module View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class)
import Bootstrap.CDN as CDN
import Model exposing (Model, Msg(..))
import Model.Header exposing (Menu(..))
import View.Header as Header
import View.Status as Status

view : Model -> Html Msg
view model =
  div []
      [ CDN.stylesheet
      , Html.map HeaderMsg ( Header.view model.headerModel )
      , div [ class "container" ] [ renderPage model ]
      ]

renderPage : Model -> Html Msg
renderPage model =
  if model.headerModel.selected == Menu1 then
    Html.map StatusMsg ( Status.view model.statusModel )
  else
    div [] []
