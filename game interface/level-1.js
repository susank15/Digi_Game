const answer=(document.querySelector('.answer').textContent);
let i=0;
let count=0;
document.querySelector('.attack').addEventListener('click',function()
{
    if(answer=="A+C+D")
    {
        document.querySelector('.crt').textContent="correct";
    }
    else
    {
        document.querySelector('.crt').textContent="wrong answer.you have two more chances";
        document.querySelector('.lifeline').style.width='20%';
        document.querySelector('.num').textContent="60%";
    }
}
);