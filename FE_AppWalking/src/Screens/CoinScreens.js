// libs
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import IconAntd from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'
import { useDispatch } from 'react-redux'
import Communications from 'react-native-communications';
// hooks
import { useMutiSetting } from '../hooks'
// componetns
import { ViewCoins } from '../Components/HomeScreen';
// actions
import { actShowLoading, actHideLoading } from '../Store/App/action'
// mocks
import dataCard from '../mocks/dataCard';
import dataInforCard from '../mocks/dataInforCard';
// others
import { Styles } from '../Assets/Styles/CoinsScreens'


const CoinScreens = () => {
  const { valueLang, sumCoin, setSumCoin } = useMutiSetting();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [coinsSelected, setCoinSelected] = useState('')
  const [cardSelected, setcardSelected] = useState({
    id: 1
  })
  const [isShowModal, setIsShowModal] = useState(false)
  const [isShowModalCard, setIsShowModalCard] = useState(false)
  const [card, setCard] = useState('')

  const handleSelectedCoin = (item) => {
    setCoinSelected(item)
    setIsShowModal(true)
  }
  const handleChooseCard = (item) => {
    setcardSelected(item)
  }
  const handleSubmit = () => {
    dispatch(actShowLoading())
    setTimeout(() => {
      setIsShowModal(false)
      dispatch(actHideLoading())
      setIsShowModalCard(true)
      let id = coinsSelected.id;
      let cardInfor = cardSelected.card;
      let infor = cardInfor.filter((item) => {
        return item.idCard === id
      })
      let result = infor[0];
      let cardNow = result.inforCard[Math.floor(Math.random() * result.inforCard.length)]
      setCard(cardNow);
    }, 2000)
  }

  const handleCloseCardInfor = () => {
    setIsShowModalCard(false)
    setSumCoin(sumCoin - parseInt(coinsSelected.value))
  }
  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity style={Styles.btnLeft} onPress={() => navigation.goBack()}>
            <IconAntd name="left" size={25} />
          </TouchableOpacity>
          <Text style={Styles.title}>{valueLang.coins}</Text>
        </View>
        <View style={Styles.headerView}>
          <View style={Styles.viewCircel}>
            <Text style={Styles.label}>{sumCoin}</Text>
            <Text style={Styles.text}>Coins</Text>
          </View>
        </View>
        <View style={Styles.bodyView}>
          <Text style={Styles.textLabel}>Giải thưởng:</Text>
          {
            dataCard && dataCard.map((item) => {
              return (
                <ViewCoins key={item.id} onPress={() => handleSelectedCoin(item)} prices={item.prices} value={item.value} coins={sumCoin} Styles={Styles} />
              )
            })
          }
        </View>
      </View>
      <Modal style={Styles.modal} isVisible={isShowModal} onBackdropPress={() => setIsShowModal(false)}>
        <View style={Styles.ViewModal}>
          <Text style={Styles.valueCard}>Giá trị thẻ: {coinsSelected.prices} VND</Text>
          <Text style={Styles.titleModal}>Vui òng chọn tổng đài:</Text>
          <View style={Styles.viewTongDai}>
            {
              dataInforCard && dataInforCard.map((item) => {
                return (
                  <TouchableOpacity key={item.id} style={[Styles.btnD, cardSelected.id === item.id && { borderColor: '#e74c3c' }]} onPress={() => handleChooseCard(item)}>
                    <Image style={Styles.logo} source={item.image} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
          <View style={Styles.btnView}>
            <TouchableOpacity style={Styles.btnTe} onPress={() => setIsShowModal(false)}>
              <Text>Thoats</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.btnTe} onPress={handleSubmit}>
              <Text>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal isVisible={isShowModalCard} onBackdropPress={handleCloseCardInfor} >
        <View style={Styles.viewModalCard}>
          <Text style={Styles.titleCard}>Cảm ơn bạn đã sử dụng ứng dụng của tôi:</Text>
          <View>
            <Text style={Styles.labelcard}>Mã card: </Text>
            <TouchableOpacity style={Styles.cardASDASD} onPress={() => Communications.phonecall(`*100*${card}#`, true)}>
              <Text>{card}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default CoinScreens