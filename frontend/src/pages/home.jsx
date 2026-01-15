import toast from 'react-hot-toast';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={() => toast.success("hello")}>Click Me</button>
    </div>
  )
}

export default Home;