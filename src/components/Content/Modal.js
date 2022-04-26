import React from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';

const LightBox = ({modal,setModal}) =>{
    const handleClose = () => setModal(false);
    const [value1, setValue1] = React.useState(50000);
    const [value2, setValue2] = React.useState(1);
    const [value3, setValue3] = React.useState(1);

    const handleSlider1Change = (event, newValue) => {
        setValue1(newValue);
    };
    const handleSlider2Change = (event, newValue) => {
        setValue2(newValue);
    };
    const handleSlider3Change = (event, newValue) => {
        setValue3(newValue);
    };

    const handleInput1Change = (event) => {
        setValue1(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleInput2Change = (event) => {
        setValue2(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleInput3Change = (event) => {
        setValue3(event.target.value === '' ? '' : Number(event.target.value));
    };
    let returns = parseInt(value1 + (0.593 * value1))
    
    return (
        <div>
            <Modal
            open={modal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={{position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 800,
                    padding:'2rem',
                    bgcolor: 'background.paper',
                }}>
                <Typography sx={{textAlign:'center'}} id="modal-modal-title" variant="h4" component="h2">
                Mutual Funds Returns Calculator
                </Typography>
                <div style={{ display:'flex',flexDirection:'column',marginBlock:'1rem' }}>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Typography variant="h5" gutterBottom>
                            Total Investment
                        </Typography>
                        <Input
                            value={value1}
                            size="small"
                            onChange={handleInput1Change}
                            inputProps={{
                            step: 10000,
                            min: 50000,
                            max: 1000000,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                    </div>
                    <div>
                    <Slider
                        sx={{width:'20rem','& .MuiSlider-thumb':{height:40,width:20,borderRadius:10}}}
                        value={typeof value1 === 'number' ? value1 : 0}
                        min={50000}
                        max={1000000}
                        onChange={handleSlider1Change}
                        aria-labelledby="input-slider"
                    />
                    </div>
                </div>
                <div style={{ display:'flex',flexDirection:'column',marginBlock:'1rem' }}>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Typography variant="h5" gutterBottom>
                            Expected Return Rate(p.a.)
                        </Typography>
                        <Input
                                value={value2}
                                size="small"
                                onChange={handleInput2Change}
                                inputProps={{
                                step: 1,
                                min: 1,
                                max: 50,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                    </div>
                    <div>  
                        <Slider
                            sx={{width:'20rem','& .MuiSlider-thumb':{height:40,width:20,borderRadius:10}}}
                            value={typeof value2 === 'number' ? value2 : 0}
                            step={0.1}
                            min={1}
                            max={50}
                            onChange={handleSlider2Change}
                            aria-labelledby="input-slider"
                        />
                    </div>
                </div>
                <div style={{ display:'flex',flexDirection:'column',marginBlock:'1rem' }}>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Typography variant="h5" gutterBottom>
                            Time period
                        </Typography>
                        <Input
                            value={value3}
                            size="small"
                            onChange={handleInput3Change}
                            inputProps={{
                            step: 1,
                            min: 1,
                            max: 30,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                            />
                    </div>
                    <div>
                        <Slider
                        sx={{width:'20rem','& .MuiSlider-thumb':{height:40,width:20,borderRadius:10}}}
                        value={typeof value3 === 'number' ? value3 : 0}
                        min={1}
                        max={30}
                        step={1}
                        onChange={handleSlider3Change}
                        aria-labelledby="input-slider"
                        />
                    </div>
                </div>
                <div>
                    <div style={{ display:'flex',justifyContent:'space-between' }}>
                        <div>
                            <Typography variant="h6">Total investment</Typography>
                            <Typography variant="h5">{`₹${value1}`}</Typography>
                        </div>
                        <div>
                            <Typography variant="h6">Est. Returns</Typography>
                            <Typography variant="h5">{`₹${returns}`}</Typography>
                        </div>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <div>
                            <Typography variant="h6">Total Value</Typography>
                            <Typography variant="h5">{`₹${value1+returns}`}</Typography>
                        </div>
                    </div>
                </div>
            </Box>
            </Modal>
        </div>
    );
}
export default LightBox;