import { Skeleton } from '@rneui/themed';
import { Dimensions, View } from 'react-native';

export default function ListSkeleton() {
    const skeletonWidth = Dimensions.get("screen").width - 32;

    return (
        <View style={{ padding: 16, gap: 10 }}>
            <Skeleton animation="pulse" width={skeletonWidth} height={180} style={{ borderRadius: 4 }} />
            <Skeleton animation="pulse" width={skeletonWidth} height={180} style={{ borderRadius: 4 }} />
            <Skeleton animation="pulse" width={skeletonWidth} height={180} style={{ borderRadius: 4 }} />
            <Skeleton animation="pulse" width={skeletonWidth} height={180} style={{ borderRadius: 4 }} />
            <Skeleton animation="pulse" width={skeletonWidth} height={180} style={{ borderRadius: 4 }} />
        </View>
    );
}