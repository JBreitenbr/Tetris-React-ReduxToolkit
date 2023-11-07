import './App.css'
import Title from './components/Title';
import Board from './components/Board';
import SmallGrid from './components/SmallGrid';
import Scores from './components/Scores';
import Controls from './components/Controls';


export default function App() {
  return (
    <main>
     <div className="comp-wrapper title">  <Title/></div>
    <div className="flex-row">
      <SmallGrid/>
      <Scores/></div>
    <div className="comp-wrapper"><Board/></div>
    <div className="comp-wrapper"><Controls/></div>
    </main>
  )
}