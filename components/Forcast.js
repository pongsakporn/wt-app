im
export default function Forecast(props) {
return (
<View >
<Text}>{props.main}</Text>
<Text>{props.description}</Text>
<View>
<Text>{props.temp}</Text>
<Text>°C</Text>
</View>
</View>
);
}