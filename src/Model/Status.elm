module Model.Status exposing (..)

import Http

type Msg
  = GetMstDataJson
  | GotMstDataJson ( Result Http.Error JsonData )

type alias JsonData =
  { status : String
  , stages : List Stage
  , light : List TrainingData
  , heavy_main : List TrainingData
  , heavy_sub : List TrainingData
  , practice_main : List TrainingData
  , practice_sub : List PracticeSubData
  , types : List Type
  }

type alias Stage =
  { id : Int
  , name : String
  }

type alias TrainingData =
  { id : Int
  , e : String
  , d : String
  , c : String
  , b : String
  , a : String
  }

type alias PracticeSubData =
  { id : Int
  , value : String
  }

type alias Type =
  { id : Int
  , name : String
  }

type alias Model =
  { json_data : JsonData }

init : Model
init =
  { json_data = JsonData "" [] [] [] [] [] [] [] }
