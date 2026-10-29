import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Homeprovider from './components/Context.jsx'

createRoot(document.getElementById('root')).render(
    <Homeprovider>

    <App />
    </Homeprovider>
)
