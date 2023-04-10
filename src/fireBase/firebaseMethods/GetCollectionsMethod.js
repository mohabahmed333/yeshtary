import {db} from '../firebase.utls';
import { collection,doc,getDocs,query,writeBatch } from 'firebase/firestore';

 
 

export const GETCollection = async ()=>{
try{
  const  collrectionRef  = collection(db,'categories');
  const q =  query(collrectionRef);
  const querySnapshot= await getDocs(q);
    querySnapshot.docs.map(docSnapShot=> docSnapShot.data())
 const catougries = querySnapshot.docs.reduce((acc,docSnapshot)=>{
   const {title,items,collImg,routeName}=docSnapshot.data()
   acc[title.toLowerCase()] = {items,collImg,routeName};
   return acc
 },{});
 return catougries
}
 catch(err){
 }
}