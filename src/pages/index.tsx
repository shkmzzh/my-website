import Container from '@/components/container';
import Header from '@/components/header';
const styleObjrct = {
  color:'red'
}
export default function Home() {
  return (
    <Container>
      <Header></Header>
      <div className={`flex`}>
        <span className="bg-white" style={styleObjrct}>hellow word</span>
      </div>
    </Container>
  );
}
