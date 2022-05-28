import { Button, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { useNavigate } from 'react-router-dom';
import { URL } from './URL';

const Comment = () => {
  const ref=useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [state, setState] = useState<{ name: string; commentText: string }>({
    name: '',
    commentText: '',
  });
  const [comments, setComments] = useState<{name:string,commentText:string}[]>([]);
  const getLoginData = () => {
    const value = localStorage.getItem("login_data")
    if (typeof value === 'string') {
        const parse = JSON.parse(value) 
        setState({ ...state, name: parse.email });
        return;
    }
  };
  useEffect(() => {
    getLoginData();
    getComment();
  }, []);

  const getComment = () =>{
    fetch(URL+'get_comment.php')
      .then((res) => res.json())
      .then((data) => {
        if (data[0]) {
          setComments(data);
        }
      });
  }
  const handleSubmit = (e: React.FormEvent<Element>) => {
    if (state.name === '') {
      e.preventDefault();
      navigate('/login');
      return;
    }
    let formBody = `name=${state.name}&comment=${state.commentText}`;
        fetch(URL+'comment.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formBody,
        }).then(()=>{
          getComment();
          setState({ ...state, commentText: '' });
        });
  };
  useEffect(() => {
    if(ref.current){
      ref.current
      .scrollTo(
        0,
        ref.current.scrollHeight
      );
    }
  }, [comments]);
  // const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) =>{
  //   setState({ ...state, commentText: e.target.value})
  // }
  return (
    <div className="comment">
      <div className="c_form" data-aos="zoom-in">
        <div ref={ref} className="commentText">
          {comments.length ? '' : 'No Comment Found'}
          {comments.map((v:{name:string,commentText:string}, i:number) => (
            <div key={i} className="d-flex align-items-center my-4">
              <div className="c_user_logo mx-4">{v.name[0]}</div>
              <div>
                <strong>{v.name}</strong>
                <pre>{v.commentText}</pre>
              </div>
            </div>
          ))}
        </div>
        <ValidatorForm className="c_input" onSubmit={(e)=>handleSubmit(e)}>
          <TextField
            value={state.commentText}
            onChange={(e)=>setState({ ...state, commentText: e.target.value})}
            label="Comment"
            // validators={['required']}
            // errorMessages={['enter comment']}
            required
            fullWidth
            style={{ marginTop: '2%' }}
            InputLabelProps={{ className: 'color' }}
            InputProps={{ className: 'color' }}
            multiline
            rows={3}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ margin: '20px 0' }}
          >
            Send
          </Button>
        </ValidatorForm>
      </div>
    </div>
  );
};

export default Comment;
