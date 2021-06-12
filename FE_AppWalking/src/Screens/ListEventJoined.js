// libs
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
// hooks
import {useMutiSetting} from '../hooks';
// actions
import {asynceListEventJoined} from '../Store/Event/action';
// orthers
import {StylesListEventJoined} from '../Assets/Styles/ListEventJoined';
import IconAntd from 'react-native-vector-icons/AntDesign';

const ListEventJoined = () => {
  const dispatch = useDispatch();
  const {valueLang} = useMutiSetting();
  const [isShowModal, setIsShowModal] = useState(false);
  const token = useSelector(state => state.Auth.token);
  useEffect(() => {
    dispatch(asynceListEventJoined({token}));
  }, []);
  const handleOpenModal = () => {
    setIsShowModal(true);
  };
  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <View style={StylesListEventJoined.container}>
        <Text style={StylesListEventJoined.title}>{valueLang.eventJoined}</Text>
        <View style={StylesListEventJoined.viewEventItems}>
          <View style={StylesListEventJoined.banner}></View>
          <View style={StylesListEventJoined.bodyEventItems}>
            <Text
              numberOfLines={2}
              style={StylesListEventJoined.labelTitleEvent}>
              Text
            </Text>
            <View style={StylesListEventJoined.viewControl}>
              <View style={StylesListEventJoined.viewPer}>
                <Text style={StylesListEventJoined.textStep}>
                  100/4000({valueLang.step})
                </Text>
                <View style={StylesListEventJoined.percentStep}>
                  <View style={StylesListEventJoined.loading}></View>
                </View>
              </View>
              <View style={StylesListEventJoined.viewButton}>
                <TouchableOpacity
                  style={StylesListEventJoined.btnDetail}
                  onPress={handleOpenModal}>
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
      </View>
      <Modal
        backdropTransitionOutTiming={700}
        backdropOpacity={0.5}
        isVisible={isShowModal}
        onBackdropPress={handleCloseModal}>
        <View style={StylesListEventJoined.viewModal}>
          <View style={StylesListEventJoined.bannerModal}>
            <TouchableOpacity
              style={StylesListEventJoined.btnClose}
              onPress={handleCloseModal}>
              <IconAntd name="close" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ListEventJoined;
