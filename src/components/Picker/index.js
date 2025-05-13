import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export function PickerItem(props) {


    let moedasItem = props.moedas.map((item, index) => {
        return <Picker.Item value={item.key} key={index} label={item.key} />
    })

    return (
        <Picker
            selectedValue={props.moedaSelecionado}
            onValueChange={(valor) => props.onChange(valor)}
        >

            {moedasItem}

            {/* {props.moedas && props.moedas.map((item, index) => (
                <Picker.Item value={item.key} key={index} label={item.key} />
            ))} */}


            {/* <Picker.Item value="BTC" key={0} label="BTC" /> */}
        </Picker>
    )
}