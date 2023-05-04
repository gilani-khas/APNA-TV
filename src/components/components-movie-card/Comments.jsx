import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Comments() {
  const [inp, setInp] = useState("");
  const comments = useSelector((state) => state.cardDate);
  const dispatch = useDispatch();

  function handleChange(e) {
    setInp(e.target.value);
  }

  function handleClick() {
    if (inp.length > 0) {
      dispatch({
        type: "comment",
        payload: {
          text: inp,
        },
      });
      setInp("");
    }
  }

  return (
    <div className='mt-[150px] w-full text-[16px]'>
      <div className='flex items-center justify-between space-x-5'>
        <input
          placeholder='Comment...'
          onChange={handleChange}
          value={inp}
          className='block w-9/12 bg-black/10 border border-gray-700 rounded-xl h-14 px-4'
          type='text'
        />
        <button
          className='w-3/12 h-14 px-4 bg-[#7B6EF6] rounded-xl'
          onClick={() => handleClick()}
        >
          Add
        </button>
      </div>
      <ul className='mt-16 flex flex-col space-y-8 lg:space-y-12'>
        {comments.comments.length === 0
          ? "Write your comment"
          : comments.comments.map((el, idx) => {
              return (
                <li
                  className='inline-block sm:w-1/2 rounded-xl text-[#7B6EF6] text-semibold p-5 lg:p-10 bg-black/20'
                  key={idx}
                >
                  {el.text}
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default Comments;
