module Utils.Request exposing (..)

import Http
import Json.Encode as Encode
import Json.Decode as Decode
import Model.Status exposing (Msg(..), JsonData, Stage, TrainingData, PracticeSubData, Type)

getMstDataJson : Cmd Msg
getMstDataJson =
  Http.request
  { method = "GET"
  , headers =
      [ Http.header "Accept" "application/json"
      , Http.header "Content-Type" "application/json"
      ]
  , url = ""
  , expect = Http.expectJson GotMstDataJson jsonDecoder
  , body = Http.emptyBody
  , timeout = Nothing
  , tracker = Nothing
  }

jsonDecoder : Decode.Decoder JsonData
jsonDecoder =
  Decode.map8 JsonData
  ( Decode.field "status" Decode.string )
  ( Decode.field "stages" ( Decode.list idNameDecoder ) )
  ( Decode.field "light" ( Decode.list trainingDataDecoder ) )
  ( Decode.field "heavy_main" ( Decode.list trainingDataDecoder ) )
  ( Decode.field "heavy_sub" ( Decode.list trainingDataDecoder ) )
  ( Decode.field "practice_main" ( Decode.list trainingDataDecoder ) )
  ( Decode.field "practice_sub" ( Decode.list practiceSubDecoder ) )
  ( Decode.field "types" ( Decode.list idNameDecoder ) )

trainingDataDecoder : Decode.Decoder TrainingData
trainingDataDecoder =
  Decode.map6 TrainingData
  ( Decode.field "id" Decode.int )
  ( Decode.field "e" Decode.string )
  ( Decode.field "d" Decode.string )
  ( Decode.field "c" Decode.string )
  ( Decode.field "b" Decode.string )
  ( Decode.field "a" Decode.string )

practiceSubDecoder : Decode.Decoder PracticeSubData
practiceSubDecoder =
  Decode.map2 PracticeSubData
  ( Decode.field "id" Decode.int )
  ( Decode.field "value" Decode.string )

idNameDecoder : Decode.Decoder Type
idNameDecoder =
  Decode.map2 Type
  ( Decode.field "id" Decode.int )
  ( Decode.field "name" Decode.string )
