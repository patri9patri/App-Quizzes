import React, { useState, useEffect } from 'react';
import ActionBar from './ActionBar';
import Attachment from './Attachment';
import ShortCut from './Shotcut';
import Author from './Author';
import Game from './Game';
import { View,StyleSheet,Image , Text} from 'react-native';


export default function Quiz(navigation) {
  const url = "https://core.dit.upm.es/api/quizzes/random10wa?token=";
  const token = "8daa7224945b42b59ec7"
  const [quizzes, setQuizzes] = useState([]);
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [isLoading, setisLoading] = useState(true);
  const [resp, setResp] = useState(["","","","","","","","","",""]);
  const [pause, setPause] = useState(false);
  const [num, setNum] = useState(10);
  const [str, setStr] = useState("");

  async function fetchData() {
    const res = await fetch(url+token);
    const myjson = await res.json();
    let quizzes_aux = [];
    myjson.map((itemQuizzes, indexQuizzes) => {
      quizzes_aux[indexQuizzes]=itemQuizzes;
      return 0;
      });
     
      setQuizzes(quizzes_aux);
      setTimeout(()=>{
        setisLoading(false);
      },100);	
  }

  useEffect(() => {
    fetchData();
  }, []);

  function reseteo(){
    setTimeout(()=>{
      setisLoading(false);
    },1000);	
    setScore(0);
    fetchData();
    setisLoading(true);	
    }

  function siguiente(){
    let aux = currentQuiz;
    aux++;
    if(aux>9){
      aux=0;
    }
    setCurrentQuiz(aux);
  }

  function anterior(){
    let aux = currentQuiz;
    aux--;
    if(aux<0){
      aux=9;
    }
    setCurrentQuiz(aux);
  }

  function comprobarRespuesta(){
    let score_aux = 0;
    for(let i=0; i<=9;i++){
      let answers = quizzes[i].answer.trim().toLowerCase();
      let answers_introducidas = resp[i].trim().toLowerCase();
      if(answers === answers_introducidas){
        score_aux=score_aux+1;
      }
    }
    setScore(score_aux)
    setFinished(true);
    }

  return (
  <View style={styles.centrar}>
    {finished ? <View><Text style={styles.resultado}>Resultado: {score}</Text></View>:
      <View>
        {isLoading ? <Image source={require('./tweaking-robot.gif')}/> :
        <View>
          {console.log(quizzes)}
          <Attachment attachment={quizzes[currentQuiz].attachment}/>
          <Game quizzes={quizzes} currentQuiz={currentQuiz} resp={resp} setResp={setResp} str={str} setStr={setStr}/>
          <Author author={quizzes[currentQuiz].author}/>
          <ShortCut quizzes={quizzes} currentQuiz={currentQuiz} setCurrentQuiz={setCurrentQuiz} setNum={setNum}/>
          <ActionBar currentQuiz={currentQuiz} siguiente={siguiente} anterior={anterior} comprobarRespuesta={comprobarRespuesta} reseteo={reseteo} setNum={setNum} str={str} setStr={setStr} resp={resp} setResp={setResp}/>
        </View>
        }
      </View>
      }
  </View>
  );
}

const styles = StyleSheet.create({
  resultado: {
    fontSize: 40,
    color: '#000'
  }, centrar:{
    justifyContent: 'center',    
    alignItems: 'center',
  }

});
