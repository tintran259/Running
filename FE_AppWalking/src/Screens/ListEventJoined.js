// libs
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
// hooks
import { useMutiSetting } from '../hooks';
// actions
import { asynceListEventJoined, asyncEventDetails } from '../Store/Event/action';
// orthers
import { StylesListEventJoined } from '../Assets/Styles/ListEventJoined';
import IconAntd from 'react-native-vector-icons/AntDesign';

const ListEventJoined = () => {
  const dispatch = useDispatch();
  const { valueLang } = useMutiSetting();
  const [isShowModal, setIsShowModal] = useState(false);
  const token = useSelector(state => state.Auth.token);
  const listEventJoined = useSelector(state => state.Event.listEventJoined);
  const eventDetails = useSelector(state => state.Event.eventDetail);
  const isChart = useSelector(state => state.App.isChart);
  useEffect(() => {
    dispatch(asynceListEventJoined({ token }));
  }, [isChart]);
  const handleOpenModal = (item) => {
    const event_id = parseInt(item.event_id);
    setIsShowModal(true);
    dispatch(asyncEventDetails({ event_id }));
  };
  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <ScrollView style={StylesListEventJoined.container}>
        <Text style={StylesListEventJoined.title}>{valueLang.eventJoined}</Text>
        {listEventJoined.length !== 0 ?
          listEventJoined.map(item => {
            return (
              <View
                style={StylesListEventJoined.viewEventItems}
                key={item.event_id}>
                <View style={StylesListEventJoined.banner}>
                  <Image style={StylesListEventJoined.imgBanner} source={require("../Assets/Images/event.jpg")} />
                </View>
                <View style={StylesListEventJoined.bodyEventItems}>
                  <Text
                    numberOfLines={2}
                    style={StylesListEventJoined.labelTitleEvent}>
                    {item.name}
                  </Text>
                  <View style={StylesListEventJoined.viewControl}>
                    <View style={StylesListEventJoined.viewPer}>
                      <Text style={StylesListEventJoined.textStep}>
                        100/{item.steps_finish}({valueLang.step})
                      </Text>
                      <View style={StylesListEventJoined.percentStep}>
                        <View style={StylesListEventJoined.loading}></View>
                      </View>
                    </View>
                    <View style={StylesListEventJoined.viewButton}>
                      <TouchableOpacity
                        style={StylesListEventJoined.btnDetail}
                        onPress={() => handleOpenModal(item)}>
                        <Text style={StylesListEventJoined.textLabel}>
                          {valueLang.detail}
                        </Text>
                      </TouchableOpacity>
                      <View style={StylesListEventJoined.joned}>
                        <Text style={StylesListEventJoined.textLabel}>
                          {valueLang.joined}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          }
          )
          :
          <View style={StylesListEventJoined.viewEmpty}>
            <Text style={StylesListEventJoined.textEmpty}>{valueLang.noEvent}</Text>
            <Image source={require("../Assets/Images/empty.png")} />
          </View>
        }
      </ScrollView>
      <Modal
        backdropTransitionOutTiming={700}
        backdropOpacity={0.5}
        isVisible={isShowModal}
        onBackdropPress={handleCloseModal}>
        <View style={StylesListEventJoined.viewModal}>
          <View style={StylesListEventJoined.bannerModal}>
            <Image style={StylesListEventJoined.imgBanner} source={require("../Assets/Images/event.jpg")} />
            <TouchableOpacity
              style={StylesListEventJoined.btnClose}
              onPress={handleCloseModal}>
              <IconAntd name="close" size={20} />
            </TouchableOpacity>
          </View>
          <Text style={StylesListEventJoined.textDes}>{eventDetails.detail_event}</Text>
        </View>
      </Modal>
    </>
  );
};

export default ListEventJoined;
