import data from './data';
import React, {useState, useEffect} from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    Modal, Button
} from "react-native";
import {Feather} from '@expo/vector-icons';

function getInitialState(item) {
    const article = data.articles.find(x => x.id === item.id);
    return {
        likes:article.likes,
        commentCount:article.commentCount,
    }
}

export default function Article({item}) {

    const initialState = getInitialState(item);
    const [likes, setLikes] = useState(initialState.likes);
    const [commentCount, setCommentCount] = useState(initialState.commentCount);
    const [comment, setComment] = useState('');
    const [isliked, setIsLiked] = useState(false);

    const [modalVisible, setModalVisible] = useState(false); // 모달 표시 상태
    const [tempComment, setTempComment] = useState(''); // 입력 중인 텍스트 임시 저장

    // [comment]가 변경될 때마다 효과 발생
    useEffect(() => {
        console.log(comment);
    },[comment]);

    function handleComment() {
        setModalVisible(true); // Modal 열기
    }

    function saveComment() {
        setComment(tempComment); // 입력한 텍스트 저장
        setCommentCount(preCommentCount => preCommentCount+1)
        setModalVisible(false); // Modal 닫기
      }

    return (
        <View style={styles.article}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <TouchableOpacity>
                        <Image source={item.avatar} style={styles.avatar} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text numberOfLines={1} style={styles.name} >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Feather name="more-horizontal" size={16} />
                </TouchableOpacity>
            </View>
            <View>
                <Image source={item.image} style={styles.image} />
                <View style={styles.action}>
                    <View style={styles.actionLeft}>
                        <TouchableOpacity style={styles.actionButton}
                        onPress={() => {
                            setIsLiked(!isliked);
                            if(isliked) {
                                setLikes(prevLikes => prevLikes - 1)
                            } else {
                                setLikes(prevLikes => prevLikes + 1)
                            }
                        }}
                        > 
                            <Feather name="heart" color={isliked?"red":"black"} size={24} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionButton}
                         onPress={handleComment}
                        >
                            <Feather name="message-circle" size={24} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name="send" size={24} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name="bookmark" size={24} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.info}>
                    <Text style={styles.likes}>{likes} Likes</Text>
                    {comment ? (
                    <Text style={styles.comments}>
                        <Text style={styles.commentsName}>{item.name} </Text>
                        <Text>{comment}</Text>
                    </Text>)
                    : null}
                    <Text style={styles.commentsView}>View all {commentCount} comments</Text>
                </View>
            </View>

             {/* 입력창 모달 */}
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)} // 뒤로가기 버튼 처리
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Leave a Comment</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Type your comment here"
                        value={tempComment}
                        onChangeText={setTempComment} // 텍스트 업데이트
                        />
                        <View style={styles.buttonContainer}>
                        <Button title="Cancel" onPress={() => setModalVisible(false)} />
                        <Button title="Save" onPress={saveComment} />
                        </View>
                    </View>
                </View>
            </Modal>        
        </View>
    )
}


const styles = StyleSheet.create({
    article: {
        marginBottom: 30,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    },
    user: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    name: {
        fontSize: 13,
        fontWeight: "600",
        lineHeight:14,
        color:'#262626',
        marginLeft:12,
        fontWeight:'bold'
    },
    moreIcon: {
        color: "#333"
    },
    image: {
        width: "100%",
        height: 300,
        // resizeMode: "contain",
        // aspectRatio:1,
        // backgroundColor:'white',
        margin:0,
        padding:0

    },
    action: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    actionLeft: {
        flexDirection: "row",
        justifyContent:'space-between',
    },
    actionButton: {
        marginRight: 10
    },
    info: {
        paddingHorizontal: 10
    },
    likes: {
        fontWeight: "bold",
        color:'#262626',
        marginBottom: 2,
    },
    comments: {
        marginBottom: 5,
    },
    commentsName: {
        fontWeight:'bold'
    },
    commentsView: {
        color: "#888",
        marginBottom: 5,
        fontWeight:'bold'
    },
    description: {
        color: "#333"
    },

    //모달창
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});