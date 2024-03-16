import React from 'react'
import "./Typhography.scss"


const Typhography = () => {
  return (
    <div className='Typhography'>
        <div className='title'>
            <p>About Us</p>
        </div>
        <div className='main'>
            <div className='row'>
                <div className='col-6'>
                    <div className='content'>
                        <h2>Lorem Ipsum Dolar</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='image'>
                        <img alt="img1" src='https://th.bing.com/th/id/R.ce6a63f6706738d588af7a67eded38d6?rik=%2f8%2fpm6Ag4AhDKg&riu=http%3a%2f%2fmedia.gettyimages.com%2fphotos%2fman-opens-the-doors-to-regent-sounds-studio-on-denmark-street-on-20-picture-id113132447%3fk%3d6%26m%3d113132447%26s%3d612x612%26w%3d0%26h%3duI0TDWNf2vq8GWWjUoMz6RM2Ts0CrRaZa9kIsNS0sEQ%3d&ehk=JM2vpoJYbgtfbyUe7qBgv%2buh0xA%2f7GaDJsl7CuVnWkc%3d&risl=&pid=ImgRaw&r=0'/>
                    </div>
                </div>
            </div>

            {/* <div className='row'>
                <div className='col'>
                    <div className='line'>
                        <div className='circle'>
                            <i className="bi bi-music-note"></i>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='row'>
                <div className='col-6'>
                    <div className='image'>
                        <img alt="img2" src='https://th.bing.com/th/id/R.ce6a63f6706738d588af7a67eded38d6?rik=%2f8%2fpm6Ag4AhDKg&riu=http%3a%2f%2fmedia.gettyimages.com%2fphotos%2fman-opens-the-doors-to-regent-sounds-studio-on-denmark-street-on-20-picture-id113132447%3fk%3d6%26m%3d113132447%26s%3d612x612%26w%3d0%26h%3duI0TDWNf2vq8GWWjUoMz6RM2Ts0CrRaZa9kIsNS0sEQ%3d&ehk=JM2vpoJYbgtfbyUe7qBgv%2buh0xA%2f7GaDJsl7CuVnWkc%3d&risl=&pid=ImgRaw&r=0'/>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='content'>
                        <h2 className='right-subtitle'>Lorem Ipsum Dolar</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Typhography