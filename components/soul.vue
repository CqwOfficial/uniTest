<template>
	<view :class="soul.boxClass">
		<block v-for="(blocks,i) in soul.block" :key="i">
			<view :class="blocks.blockClass">
				<block v-for="(lines,ii) in blocks.line" :key="ii">
					<view :class="lines.lineClass">
						<block v-for="(els,iii) in lines.el" :key="iii">
							<view v-if="els.info" :class="els.elClass">{{els.info}}</view>
							<view v-if="els.image" :class="els.elClass">
								<image :class="els.elClass" :src="els.image" mode=""></image>
							</view>
							<view class="">
								
							</view>
						</block>
					</view>
				</block>
				
			</view>
		</block>
		
		<button type="primary" @click="cl" style="width: 200upx; height: 100upx;"></button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props:['soul'],
		onReady() {
			console.log(this.soul)
		},
		methods: {
			cl:()=>{
				console.log(this.soul)
			}
		}
	}
</script>


