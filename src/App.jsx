import Card from './Card'
import './App.css'


function App() {
 
  const articles = [
    {
    title: "Lorem ipsum",
    description: "Suspendisse eros ex, iaculis laoreet ex sed, interdum pulvinar odio. Vestibulum aliquam nunc eu pellentesque dapibus."
    },
    {
        title: "Dolor sit",
        description: "Suspendisse ultricies erat lectus, quis aliquam magna congue a. Sed nec erat ac massa gravida lobortis et in nisi."
        },
    {
            title: "Amet consectetur",
            description: "Maecenas quis velit quis justo vestibulum porttitor ac in dui. Donec leo urna, laoreet id faucibus non, semper et sapien."
            },

   ]

  

  return (
    <>
        {articles.map(({title, description}) => (
          <Card title={title}>{description}</Card>
        )
        )
        }
    </>
  )
}

export default App
