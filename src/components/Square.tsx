import { h } from 'preact'

type typeProps = {
    onClick: () => void;
    value: any;
}

export default function Square(props: typeProps) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}