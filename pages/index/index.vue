<template>
	<view class="content">
		<view class="query-tool">
			<view class="uni-form-item uni-column">
				<input class="uni-input" focus placeholder="内容" @input="setInput" />
				<fa-icon type="search" class="query-search" size="22" color="#666" @click="query"></fa-icon>
			</view>
		</view>
		<view class=""></view>
	</view>
</template>

<script>
import faIcon from '@/components/kilvn-fa-icon/fa-icon.vue';
export default {
	components: {
		faIcon
	},
	data() {
		return {
			title: 'Hello',
			expNo: null
		};
	},
	onLoad() {},
	methods: {
		query: function() {
			let _sfle = this;
			console.log(_sfle.expNo);
			if (_sfle.expNo != null) {
			} else {
				uni.showToast({
					title: '请填写单号',
					icon: 'none',
					image: '../../static/icon/err.svg',
					duration: 1000
				});
			}
		},
		setInput: function() {
			this.expNo = event.target.value;
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50upx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36upx;
	color: #8f8f94;
}

.query-tool {
	background-color: #007aff;
	width: 100%;
	height: 75px;
	border-bottom: 1px solid #007aff;
	line-height: 75px;
	border-bottom-left-radius: 75%;
	border-bottom-right-radius: 75%;
}
.query-tool .uni-form-item {
	height: 35px;
	position: relative;
}
.query-tool .uni-input {
	text-align: center;
	margin: 0 auto;
	border: 1px solid red;
	height: 35px;
	width: 75%;
	background-color: #ffffff;
	position: relative;
	border-radius: 25px;
	margin-top: 15px;
}
.query-tool .query-search {
	position: absolute;
	right: 15%;
	top: 6px;
}
</style>
