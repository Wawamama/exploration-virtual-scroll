const FakeSubtitleInput = ({text, height}: {text: string, height: number}) => {

    return (
        <div style={{display: 'flex', gap: '10px', padding: '10px', height}}>
            <div style={{backgroundColor: '#303648', color:'#FFF', width: '430px', display: 'flex', alignItems:'center', paddingLeft: '20px'}}>{text}</div>
            <div className="duration-div" style={{backgroundColor: '#303648', width: '130px'}}></div>
        </div>
    )
}

export default FakeSubtitleInput